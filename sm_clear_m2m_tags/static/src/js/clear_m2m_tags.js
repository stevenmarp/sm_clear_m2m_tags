odoo.define("sm_clear_m2m_tags.clear_m2m_tags", function (require) {
    "use strict";

    const relationalFields = require("web.relational_fields");

    const makeClearAllMixin = function (Widget) {
        return {
            events: _.extend({}, Widget.prototype.events, {
                "click .o_clear_all_tags": "_onClearAllTags",
            }),

            _renderEdit: function () {
                const result = this._super.apply(this, arguments);
                this._renderClearAllButton();
                return result;
            },

            _renderReadonly: function () {
                const result = this._super.apply(this, arguments);
                this.$(".o_clear_all_tags").remove();
                return result;
            },

            _renderClearAllButton: function () {
                this.$(".o_clear_all_tags").remove();
                if (this.mode !== "edit" || !this.value || !(this.value.data || []).length) {
                    return;
                }
                this.$el.append(
                    $("<button/>", {
                        type: "button",
                        class: "btn btn-link p-0 ml-1 o_clear_all_tags text-muted",
                        title: "Clear all",
                        tabindex: -1,
                    }).append($("<i/>", { class: "fa fa-times-circle" }))
                );
            },

            _onClearAllTags: function (ev) {
                ev.preventDefault();
                ev.stopPropagation();
                const ids = _.pluck(this.value.data || [], "id");
                if (ids.length) {
                    this._setValue({ operation: "FORGET", ids: ids });
                }
            },
        };
    };

    relationalFields.FieldMany2ManyTags.include(makeClearAllMixin(relationalFields.FieldMany2ManyTags));

    if (relationalFields.FormFieldMany2ManyTags) {
        relationalFields.FormFieldMany2ManyTags.include(makeClearAllMixin(relationalFields.FormFieldMany2ManyTags));
    }
});
