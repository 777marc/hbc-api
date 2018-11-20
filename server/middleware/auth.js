module.exports = (req, res, next) => {
    console.log('in auth middleware:', req.params);
	return next();
};