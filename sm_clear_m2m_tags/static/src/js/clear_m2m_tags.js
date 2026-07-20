/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { Many2ManyTagsField } from "@web/views/fields/many2many_tags/many2many_tags_field";

patch(Many2ManyTagsField.prototype, {
    async clearAllTags() {
        const list = this.props.record.data[this.props.name];
        for (const record of [...list.records]) {
            await list.forget(record);
        }
    },
});
