/* eslint-disable spellcheck/spell-checker */
module.exports = {
    root: true,
    extends: [
        'standard-jsx',
        'standard-react',
        'plugin:jest/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    env: {
        browser: true,
        es6: true,
        jest: true,
        commonjs: true,
    },
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
            arrowFunctions: true,
        },
    },
    plugins: ['import', 'react', 'react-hooks', '@typescript-eslint', 'jsx-a11y', 'prettier', 'spellcheck'],
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                paths: ['./src'],
            },
        },
    },
    rules: {
        // General
        'one-var': ['error', 'never'],

        // Prettier
        'prettier/prettier': 'error',

        // New rules
        'class-methods-use-this': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',

        // React
        'react-hooks/exhaustive-deps': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/jsx-handler-names': 'off',

        // Typescript
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/method-signature-style': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        "@typescript-eslint/explicit-module-boundary-types": "off",
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'spellcheck/spell-checker': [
            1,
            {
                comments: false,
                strings: true,
                identifiers: false,
                lang: 'en_US',
                skipWords: ['dict', 'aff', 'hunspellchecker', 'hunspell', 'utils', 'aws', 'leaderboard', 'Lato', 'lti'],
                skipIfMatch: [
                    'http://[^s]*',
                    '^[-\\w]+/[-\\w\\.]+$', // For MIME Types
                ],
                skipWordIfMatch: [
                    // '^foobar.*$', // words that begin with foobar will not be checked
                ],
                minLength: 3,
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            { args: 'none', ignoreRestSiblings: true, varsIgnorePattern: '^_' },
        ],
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            rules: {
                '@typescript-eslint/no-unsafe-member-access': 'off',
            },
        },
    ],
    ignorePatterns: [
        '/build',
        '/coverage',
        '/dist',
        '/node_modules',
        '/src/react-app-env.d.ts',
        '/src/serviceWorker.ts',
        '/src/setupTests.ts',
    ],
};
