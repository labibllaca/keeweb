const Libs = {
    backbone: require('backbone'),
    _: require('underscore'),
    underscore: require('underscore'),
    $: require('jquery'),
    jquery: require('jquery'),
    kdbxweb: require('kdbxweb'),
    hbs: require('hbs'),
    pikaday: require('pikaday'),
    filesaver: require('filesaver'),
    qrcode: require('qrcode')
};

const PluginApi = {
    require(module) {
        return Libs[module] || require('../' + module);
    }
};

module.exports = PluginApi;
