'use strict'

const { Driver } = require('homey')
const AircoDriver = require('../airco/driver.js')

class MHACWIFI1_Driver extends Driver {

  async onInit() {
    this.log('MHACWIFI1_Driver has been inited')
  }

}

module.exports = MHACWIFI1_Driver
