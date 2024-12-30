module.exports = {
  preset: 'react-native',
  // "jest": {
  //   "testURL": "http://localhost",
  //   "setupFiles": [
  //     "./test/jestsetup.js"
  //   ],
  //   "snapshotSerializers": [
  //     "<rootDir>/node_modules/enzyme-to-json/serializer"
  //   ],
  //   "moduleDirectories": [
  //     "node_modules",
  //     "/src"
  //   ],
  //   "moduleNameMapper": {
  //     "\\.(css|scss)$": "<rootDir>/test/EmptyModule.js"
  //   }
  // },
  "jest": { "transform": { "^.+\\.jsx?$": "babel-jest" } },

  
};
