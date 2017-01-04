require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//获取图片数据，将图片信息转化为url路径
let imageDatas = require('../data/imgdata.json');
imageDatas = (function getImgUrl(imgDatasArr){
	for (var i = 0; i < imgDatasArr.length; i++) {
		var oneImgData = imgDatasArr[i];
		oneImgData.imageUrl = require('../images/' + oneImgData.fileName);
		imgDatasArr[i] = oneimgData; //这是引用，可以不要，谨慎起见
	}
	return imgDatasArr;
})(imageDatas)

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <section className = "stage" ref = "stage">
      	<section className = "img-sec">
			/*{imgFigures}*/
      	</section>
        <nav className = "controller-nav">
			// {controllerUnits}
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
