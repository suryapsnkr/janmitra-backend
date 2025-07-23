const mongoose = require('mongoose');

const modulePermissionSchema = new mongoose.Schema({
  moduleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Module', required: true },
  roleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true },
  canAdd: { type: Boolean, default: false },
  canEdit: { type: Boolean, default: false },
  canDelete: { type: Boolean, default: false },
  canView: { type: Boolean, default: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('ModulePermission', modulePermissionSchema);
