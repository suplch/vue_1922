const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shop', { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

const ProductTypeSchema = new Schema({
    name: String,
});
const ProductSchema = new Schema({
    name: String,
    price: Number,
    pic: String,
    type_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'ProductType'
    }
});

const CommentSchema = new Schema({
    text: String,
    pid: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Product'
    }
})

const ProductType = mongoose.model('ProductType', ProductTypeSchema);
const Product = mongoose.model('Product', ProductSchema);
const Comment = mongoose.model('Comment', CommentSchema);

const product_type_list = [
    {
        name: '水果',
        items: [
            {name: '香蕉', price: 10, pic: '🍌'},
            {name: '苹果', price: 12, pic: '🍎'},
            {name: '鸭梨', price: 5, pic: '🍐'},
            {name: '桃子', price: 10, pic: '🍑'},
            {name: '西瓜', price: 2, pic: '🍉'},
            {name: '菠萝', price: 15, pic: '🍍'},
            {name: '车厘子', price: 99, pic: '🍒'},
            {name: '草莓', price: 30, pic: '🍓'},
            {name: '葡萄', price: 28, pic: '🍇'},
            {name: '猕猴桃', price: 18, pic: '🥝'},
            {name: '柠檬', price: 11, pic: '🍋'},
        ]
    },
    {
        name: '蔬菜',
        items: [
            {
                name: '西红柿', price: 3.2, pic: '🍅',
                comments: [
                    {text: '不错非常好吃 有营养'},
                    {text: '你家的蔬菜就是好吃'},
                    {text: '买回家, 第二天就发霉了, 差评'}
                ]
            },
            {
                name: '茄子', price: 1.8, pic: '🍆',
                comments: [
                    {text: '这菜太费油了'},
                    {text: '恩, 好吃'},
                ]
            },
            {name: '黄瓜', price: 1.2, pic: '🥒'},
            {name: '萝卜', price: 0.8, pic: '🥕'},
            {name: '辣椒', price: 5.0, pic: '🌶'},
            {name: '土豆', price: 3.5, pic: '🥔'},
            {name: '玉米', price: 1.5, pic: '🌽'},
            {name: '红薯', price: 2.5, pic: '🍠'},
            {name: '花生', price: 3.2, pic: '🥜'},
            
        ]
    },
    {
        name: '副食',
        items: [
            {
                name: '蜜罐', price: 30, pic: '🍯',
                comments: [
                    {text: '非常不错, 再来一单'},
                    {text: '😋美味'},
                ]
            },
            {name: '牛角包', price: 15, pic: '🥐'},
            {name: '吐司面包', price: 10, pic: '🍞'},
            {name: '长面包', price: 16, pic: '🥖'},
            {name: '奶酪', price: 28, pic: '🧀'},
            {name: '香肠', price: 26, pic: '🥓'},
            {name: '茶点', price: 12, pic: '🥞'},
            {name: '糕点', price: 18, pic: '🍰'},
            
        ]
    },
    {
        name: '体育',
        items: [
            {name: '足球', price: 50, pic: '⚽️'},
            {name: '篮球', price: 60, pic: '🏀'},
            {name: '橄榄球', price: 80, pic: '🏈'},
            {name: '排球', price: 30, pic: '🏐'},
            {name: '冰球', price: 30, pic: '🏒'},
            {name: '曲棍球', price: 30, pic: '🏑'},
            {name: '冰鞋', price: 300, pic: '⛸'},
            {name: '乒乓球', price: 60, pic: '🏓'},
            {name: '羽毛球', price: 88, pic: '🏸'},
            
        ]
    },
    {
        name: '衣帽',
        items: [
            {
                name: '短袖', price: 120, pic: '👕',
                comments: [
                    {text: '不错, 穿着非常舒服'},
                    {text: '一口气买了👕👕👕件'},
                ]
            },
            {
                name: '牛仔裤', price: 80, pic: '👖'
            },
            {name: '衬衣', price: 150, pic: '👔'},
            {name: '裙子', price: 500, pic: '👗'},
            {name: '内衣', price: 200, pic: '👙'},
            {name: '和服', price: 1000, pic: '👘'},
            {name: '红皮鞋', price: 600, pic: '👠'},
            {name: '高跟拖鞋', price: 500, pic: '👡'},
            {name: '风衣', price: 2000, pic: '🧥'},
            {name: '袜子', price: 10, pic: '🧦'},
            {name: '帽子', price: 20, pic: '🧢'},
            {name: '围巾', price: 35, pic: '🧣'},
            {name: '高腰鞋', price: 800, pic: '👢'},
            {name: '皮鞋', price: 1200, pic: '👞'},
            {name: '休闲鞋', price: 60, pic: '👟'},
            {name: '女帽', price: 60, pic: '👒'},
            {name: '男帽', price: 80, pic: '🎩'},
            {name: '女士包', price: 500, pic: '👛'},
            {name: '公文包', price: 200, pic: '💼'},
        ]
    },
]

async function run() {
    await ProductType.deleteMany().exec();
    await Product.deleteMany().exec();
    await Comment.deleteMany().exec();
    // 遍历数组 将数据保持到 mongodb 数据库中
    for (let type of product_type_list) {
        const productType = await ProductType.create({name: type.name});
        for (let item of type.items) {
            const product = await Product.create({...item, type_id: productType._id});

            if (item.comments) {
                for (let comment of item.comments) {
                    await Comment.create({...comment, pid: product._id})
                }
            }
        }
    }
}

run().then(function() {
    mongoose.connection.close();
})