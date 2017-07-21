module.exports = {
    "extends": "google",
    "plugins": [
        "react",
    ],
    "rules": {
        "max-len": 0,
        "object-curly-spacing": 0,
        "require-jsdoc": 0,
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
    },
    "settings": {
        "react": {
            "createClass": "createClass", // Regex for Component Factory to use, default to "createClass"
            "pragma": "React",  // Pragma to use, default to "React"
            "version": "15.0", // React version, default to the latest React stable release
        },
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true,
        },
        "ecmaVersion": 6,
        "sourceType": "module",
    },
};
