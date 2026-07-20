/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { Many2ManyTagsField } from "@web/views/fields/many2many_tags/many2many_tags_field";

patch(Many2ManyTagsField.prototype, "sm_clear_m2m_tags.Many2ManyTagsField", {
    clearAllTags() {
        const value = this.props.value;
        if (!value || !value.currentIds.length) {
            return;
        }
        value.replaceWith([]);
    },
});
