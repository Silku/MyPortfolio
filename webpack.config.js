// path 조작을 도와주는 node
const path = require('path');

// 배포할때는 환경변수 설정해줘야한다.
// production.env.NODE_ENV = 'production'


const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


//웹팩 설정  entry, module, plugins, output + mode 등 기타설정 흐름 잘 기억하기!

module.exports = {
    name: 'myportfolio',
    mode: 'development', // 실서비스: production
    devtool: 'eval', // 실서비스: hidden-source-map
    //resolve : entry에 등록된 파일명에 해당하는 확장자를 웹팩에서 자동으로 찾아줌
    resolve : {
        extensions : ['.js', '.jsx']
    },

    // entry : 입력하는 부분
    entry : {
        app : './App',
    },
    
    /**
    presets : preset-env는 환경설정을 해주는 모듈. 배열형태로 해서 세부설정을 해줄수 있음.
    한국에서 브라우저점유율 5%이상, 최신 크롬 버전 -2 브라우저 까지 동작하도록 설정한 상태

    브라우저 지원 관련 참조 링크
    https://github.com/browserslist/browserslist
    **/
    module:{
        rules :[{
            test : /\.jsx?/,
            loader : 'babel-loader',
            options : {
                presets:[
                    ['@babel/preset-env', {
                        targets:{
                            browsers:['> 5% in KR', 'last 2 chrome versions']
                        },
                        debug: true,
                    }], 
                    '@babel/preset-react'
                ],
                plugins:[
                    'react-refresh/babel',
                ],
            }
        },{
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader']
        }]
    },
    //plugins 기본적으로 babel에서 지원하는것 외에 더 붙이고 싶을때 사용
    plugins: [
        new LoaderOptionsPlugin ({ debug : true }),
        new RefreshWebpackPlugin()
    ],
    // output : 출력하는 부분
    output : {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist',
        
    },
    devServer:{
        port:3000,
        devMiddleware:{
            publicPath: '/dist',
        }, 
        static:{
            directory : path.resolve(__dirname),
        },
        hot:true,
        historyApiFallback:true
    }

    // react-router-dom 관련 : 웹팩을 사용하고 있다면 아래 설정을 확인하십시오.
    // output.publicPath="/" 
    //devServer.historyApiFallback = true 
};

