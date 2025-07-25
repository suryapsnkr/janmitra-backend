const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/auth', require('./routes/auth.routes'));

app.use('/api/members', require('./routes/member.routes'));
app.use('/api/orders', require('./routes/order.routes'));
app.use('/api/payments', require('./routes/payment.routes'));

app.use('/api/qualifications', require('./routes/qualification.routes'));
app.use('/api/relations', require('./routes/relation.routes'));
app.use('/api/pincodes', require('./routes/pincode.routes'));

app.use('/api/categories', require('./routes/category.routes'));
app.use('/api/subcategories', require('./routes/subcategory.routes'));
app.use('/api/products', require('./routes/product.routes'));

app.use('/api/modules', require('./routes/module.routes'));
app.use('/api/roles', require('./routes/role.routes'));
app.use('/api/module-permissions', require('./routes/module_permission.routes'));

app.use('/api/units', require('./routes/unit_master.routes'));
app.use('/api/warehouses', require('./routes/warehouse.routes'));
app.use('/api/multiprices', require('./routes/multiprice.routes'));

app.use('/api/galleries', require('./routes/gallery.routes'));
app.use('/api/blogs', require('./routes/blog.routes'));
app.use('/api/firms', require('./routes/firm.routes'));

app.use('/api/user-roles', require('./routes/user_role.routes'));
app.use('/api/deliveries', require('./routes/delivery.routes'));

app.use('/api/website-settings', require('./routes/websiteSetting.routes'));
app.use('/api/terms-condition', require('./routes/terms_condition.routes'));
app.use('/api/privacy-policy', require('./routes/privacyPolicy.routes'));
app.use('/api/contacts', require('./routes/contact.routes'));

app.use('/api/social-links', require('./routes/socialLink.routes'));
app.use('/api/faqs', require('./routes/faq.routes'));
app.use('/api/banners', require('./routes/banner.routes'));
app.use('/api/feedbacks', require('./routes/feedback.routes'));


// 🛡️ Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      message: err.message,
      errors: err.errors
    });
  }
  res.status(500).json({ message: 'Something went wrong!' });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
