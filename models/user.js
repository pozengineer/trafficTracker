module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        businessType: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        lat: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        lon: {
            type: DataTypes.DOUBLE,
            allowNull: true
        }
    });

    return User;
};
