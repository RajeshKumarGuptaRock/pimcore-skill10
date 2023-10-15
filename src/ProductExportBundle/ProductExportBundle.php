<?php

namespace ProductExportBundle;

use Pimcore\Extension\Bundle\AbstractPimcoreBundle;

class ProductExportBundle extends AbstractPimcoreBundle
{
    public function getJsPaths()
    {
        return [
            '/bundles/productexport/js/pimcore/startup.js'
        ];
    }
}