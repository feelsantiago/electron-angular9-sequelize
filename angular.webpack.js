const path = require('path');
/**
 * Custom angular webpack configuration
 */

module.exports = (config, options) => {
    config.target = 'electron-renderer';
    if (options.customWebpackConfig.target) {
        config.target = options.customWebpackConfig.target;
    } else if (options.fileReplacements) {
        for(let fileReplacement of options.fileReplacements) {
            if (fileReplacement.replace !== 'src/environments/environment.ts') {
                continue;
            }

            let fileReplacementParts = fileReplacement['with'].split('.');
            if (['dev', 'prod', 'test', 'electron-renderer'].indexOf(fileReplacementParts[1]) < 0) {
                config.target = fileReplacementParts[1];
            }
            break;
        }
    }

    // start of extra configs
    config.externals = {
        typeorm: "require('typeorm')",
        mysql: "require('mysql')",
    };

    const databaseAlias = {
        typeorm: path.resolve(__dirname, "../node_modules/typeorm/typeorm-model-shim"),
        mysql: path.resolve(__dirname, "../node_modules/mysql/index"),
    }

    config.resolve.alias = { ...config.resolve.alias, ...databaseAlias }

    return config;
}
