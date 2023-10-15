pimcore.registerNS("pimcore.plugin.ProductExportBundle");

pimcore.plugin.ProductExportBundle = Class.create(pimcore.plugin.admin, {
    getClassName: function () {
        return "pimcore.plugin.ProductExportBundle";
    },

    initialize: function () {
        pimcore.plugin.broker.registerPlugin(this);
    },

    pimcoreReady: function (params, broker) {
        // alert("ProductExportBundle ready!");
    }
});

var ProductExportBundlePlugin = new pimcore.plugin.ProductExportBundle();
