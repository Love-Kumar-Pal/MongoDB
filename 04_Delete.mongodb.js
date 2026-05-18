use('ecommerce');

db.contacts.deleteOne({ name: "Alice" })
// db.contacts.deleteMany({ name: "Alice" })

db.orders.deleteMany({ status: "Delivered" })