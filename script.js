require(["esri/config", 
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/widgets/Legend"], function (esriConfig, WebScene, SceneView, Legend) {

esriConfig.apiKey =  "AAPK6221ccc708944717801b1e737e84e229ARkRORCTCsMHPkG82l8m647wlPBVSru5T3Z9cJ0JjaSyfYk-s0mQw-UiHP3Xv8jT"; 

const webscene = new WebScene({
        portalItem: {
          id: "579f97b2f3b94d4a8e48a5f140a6639b"
        }
      });

  const view = new SceneView({
        container: "viewDiv",
        map: webscene
      });
  
  const legend = new Legend ({
        view:view
      });

      view.ui.add(legend, "top-right");
  
 });
