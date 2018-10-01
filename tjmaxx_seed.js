const mongoClient = require('mongodb').MongoClient,
      url = "mongodb://localhost:27017/";


const data = [
  {
    "barcode_no":"883153834902",
    "barcode_type":"UPC",
    "order_details":{
      "products":[{
        "product_id":"sh1357",
        "product_name":"Nike Sneakers",
        "brand":"Nike",
        "category":"Men Shoes",
        "image":"https://banner2.kisspng.com/20180419/yqe/kisspng-nike-flywire-shoe-sneakers-nike-air-max-running-shoes-5ad8401297fb83.7322851215241216186225.jpg",
      },
      {
        "product_id":"hb4456",
        "product_name":"Baggit Shoulder Bag",
        "brand":"Baggit",
        "category":"female handbag",
        "image":"https://rukminim1.flixcart.com/image/612/612/jb3yp3k0/hand-messenger-bag/s/p/g/lxe4-enter-y-g-e-silicon-tan-tan-l-8903414761296-shoulder-bag-original-imafyg52zxfe6unq.jpeg?q=70",
      }]
    }
  },
  {
    "barcode_no":"031655337913",
    "barcode_type":"UPC",
    "order_details":{
      "products":[{
        "product_id":"sh1355",
        "product_name":"Adidas shoes",
        "brand":"Adidas",
        "category":"Men Shoes",
        "image":"http://pngimg.com/uploads/running_shoes/running_shoes_PNG5786.png",
      }]
    }
  },
]

    mongoClient.connect(url,(err,client)=>{

    if(err) throw err;
    else{
      const db = client.db('tjmaxx');

      db.collection('purchasedOrderDetails').insertMany(data,(err,result)=>{
        if(err) throw err;
        else console.log('data inserted');
      })
    }

    });
