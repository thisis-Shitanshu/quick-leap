module.exports = (app) => {
    app.post(
        '/api/login',
        (req, res) => {
            const { email, password } = req.body;
            if ( email === 'dashboard@quickleap.co' && password === 'dashboard@password22nov' ) {
                
            } else {
                return res.status(400).json({ message: 'Validation Error'});
            }
        }
    );
};