'use strict'

const { Device } = require('homey')
const AircoDevice = require('../airco/device.js')
const acwm = require('acwm-api')

class MHACWIFI1_Device extends Device {

  async onInit() {
    this.log('MHACWIFI1_Device has been inited')

    let settings = this.getSettings()
    this.acwm = new acwm(settings.ip)
    this.acwm.login(settings.username, settings.password)
      .then(r => {
        console.log(r)
        this.interval = settings.interval
        this.registerReadyListener(this.onReady.bind(this))
        this.updateAllValues()
      })
      .catch(err => console.error(err))
  }

  async onReady() {
    // Place the code from the original onInit() method of AircoDevice class here.
    // Make necessary changes to adapt it to the new SDK3 if needed.
  }

}

module.exports = MHACWIFI1_Device

