const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
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

async function all_product() {
    return await Product.find().exec()
}

async function all_type() {
    return await ProductType.find().exec();
}

async function productsByTypeId(typeId) {
    return await Product.find({type_id: ObjectId(typeId)})
}

async function commentByPId(pid) {
    return await Comment.find({pid: ObjectId(pid)});
}

module.exports = {
    all_product,
    all_type, 
    productsByTypeId,
    commentByPId
}