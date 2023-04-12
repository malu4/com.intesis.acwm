'use strict'

const { Driver } = require('homey')
const acwm = require('acwm-api')

class AircoDevice extends Driver {

  async onInit() {
    this.log('AircoDevice has been inited')

    this.registerFlowCard('onoff', this.onPowerOnoff.bind(this))
    this.registerFlowCard('thermostat_mode_mh', this.onThermostatMode.bind(this))
    this.registerFlowCard('fan_rate_mh', this.onFanRate.bind(this))
    this.registerFlowCard('vane_updown_position_mh', this.onVaneUpDownDirection.bind(this))
    this.registerFlowCard('target_temperature', this.onSetpoint.bind(this))

    this.on('settings', this.onSettings.bind(this))
    this.on('ready', () => {
      this.setPollTimer(this.interval)
    })
  }

  async registerFlowCard(capability, method) {
    this.homey.flow.getDeviceTriggerCard(capability)
      .registerRunListener(method)
  }

  async onSettings(newSettings) {
    const oldSettings = this.getSettings()
    const changedKeys = Object.keys(newSettings)

    this.log(changedKeys)

    // Rest of the onSettings code...
  }

  // Rest of the class methods...
}

module.exports = AircoDevice
