const fs = require('fs');

var getAddress = (address, setDefault) => {
  if (address) {
    if (setDefault) {
      fs.writeFileSync('default-address.json', JSON.stringify({
        defaultAddress: address
      }));
    }
    return address;
  } else {
    try {
      var defaultAddress = fs.readFileSync('default-address.json');
      var defaultAddressObject = JSON.parse(defaultAddress);
      return defaultAddressObject.defaultAddress;
    } catch (e) {
      console.log('Address not provided and default address not found.');
      return undefined;
    }
  }
};

module.exports.getAddress = getAddress;
