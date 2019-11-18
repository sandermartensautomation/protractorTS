import { Config } from 'protractor';

export let config: Config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['tests/spec.js']
}