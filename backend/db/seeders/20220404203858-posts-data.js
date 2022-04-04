'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Posts', [
      {
        userId: 1,
        title: "test1",
        imgUrl: "https://wallpapercave.com/wp/wp8473042.jpg",
        context: "Two assure edward whence the was. Who worthy yet ten boy denote wonder. Weeks views her sight old tears sorry. Additions can suspected its concealed put furnished. Met the why particular devonshire decisively considered partiality. Certain it waiting no entered is. Passed her indeed uneasy shy polite appear denied. Oh less girl no walk. At he spot with five of view.",
        availability: 20

      },
      {
        userId: 1,
        title: "test2",
        imgUrl: "https://www.freepsdbazaar.com/wp-content/uploads/2020/06/sky-replace/sky-sunset/sunset-021-freepsdbazaar.jpg",
        context: "Two assure edward whence the was. Who worthy yet ten boy denote wonder. Weeks views her sight old tears sorry. Additions can suspected its concealed put furnished. Met the why particular devonshire decisively considered partiality. Certain it waiting no entered is. Passed her indeed uneasy shy polite appear denied. Oh less girl no walk. At he spot with five of view.",
        availability: 40

      },
      {
        userId: 1,
        title: "test3",
        imgUrl: "https://www.freepsdbazaar.com/wp-content/uploads/2020/06/sky-replace/sun-rise/sunrise-23-freepsdbazaar.jpg",
        context: "Two assure edward whence the was. Who worthy yet ten boy denote wonder. Weeks views her sight old tears sorry. Additions can suspected its concealed put furnished. Met the why particular devonshire decisively considered partiality. Certain it waiting no entered is. Passed her indeed uneasy shy polite appear denied. Oh less girl no walk. At he spot with five of view.",
        availability: 10

      },
      {
        userId: 2,
        title: "test For user 2",
        imgUrl: "https://www.freepsdbazaar.com/wp-content/uploads/2020/06/sky-replace/sun-rise/sunrise-23-freepsdbazaar.jpg",
        context: "An so vulgar to on points wanted. Not rapturous resolving continued household northward gay. He it otherwise supported instantly. Unfeeling agreeable suffering it on smallness newspaper be. So come must time no as. Do on unpleasing possession as of unreserved. Yet joy exquisite put sometimes enjoyment perpetual now. Behind lovers eat having length horses vanity say had its.",
        availability: 10,
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Posts', null, {});

  }
};
