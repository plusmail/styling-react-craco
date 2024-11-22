const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "@styles": path.resolve(__dirname, "src/styles"), // Less 스타일 경로 별칭 설정
            "@component": path.resolve(__dirname, "src/component"), // Less 스타일 경로 별칭 설정
        },
    },
    // style: {
    //     less: {
    //         loaderOptions: {
    //             lessOptions: {
    //                 javascriptEnabled: true, // JavaScript 내장 기능 활성화 (필요시)
    //             },
    //         },
    //     },
    // },
};