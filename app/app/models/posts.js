'use strict';
module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define('Posts', {
        text: {
            type: DataTypes.TEXT
        }
    }, {
            tableName: 'posts',
            timestamps: false
        });
    Posts.associate = function (models) {

    };
    return Posts;
};
