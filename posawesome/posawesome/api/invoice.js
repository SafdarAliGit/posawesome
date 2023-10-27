// Copyright (c) 20201 Youssef Restom and contributors
// For license information, please see license.txt

frappe.ui.form.on('Sales Invoice', {
    setup: function (frm) {
        frm.set_query("posa_delivery_charges", function (doc) {
            return {
                filters: { 'company': doc.company, 'disabled': 0 }
            };
        });
    },
    before_save: function(frm) {
        frm.set_value('token', frm.doc.name);
    }
});