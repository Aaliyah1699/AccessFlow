const customError = require('../errors');
const { isTokenValid } = require('../utils');

const authenticateUser = async (req, res, next) => {
    const { refreshToken, accessToken } = req.signedCookies;

    try {
        if (accessToken) {
            const payload = isTokenValid(accessToken);
            req.user = payload.user;
            return next();
        }
    } catch (error) {
        throw new customError.UnauthenticatedError('Authentication Invalid');
    }
};

const authorizePermissions = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new customError.UnauthorizedError(
                'Unauthorized to access this route'
            );
        }
        next();
    };
};

module.exports = { authenticateUser, authorizePermissions };
