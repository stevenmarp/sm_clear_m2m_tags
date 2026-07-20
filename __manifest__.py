# -*- coding: utf-8 -*-
{
    "name": "Clear All Many2many Tags",
    "version": "1.0.0",
    "category": "Extra Tools",
    "summary": "Clear all selected many2many tags in one click across backend forms",
    "description": """
Clear All Many2many Tags
========================

Adds a small Clear All button to editable many2many_tags widgets across Odoo
backend forms. Remove all selected tags in one click instead of deleting them
one by one. Works with categories, tags, taxes, routes, followers, allowed
companies, access groups and custom many2many tag fields. Zero configuration.
    """,
    "author": "Steven Marp",
    "website": "https://apps.odoo.com/apps/modules/browse?author=Steven Marp",
    "license": "OPL-1",
    "depends": ["web"],
    "assets": {
        "web.assets_backend": [
            "sm_clear_m2m_tags/static/src/js/clear_m2m_tags.js",
            "sm_clear_m2m_tags/static/src/xml/clear_m2m_tags.xml",
            "sm_clear_m2m_tags/static/src/scss/clear_m2m_tags.scss",
        ],
    },
    "installable": True,
    "application": False,
    "auto_install": False,
    "images": ["static/description/banner.gif", "static/description/icon.png"],
    "price": 2.00,
    "currency": "USD",
}
