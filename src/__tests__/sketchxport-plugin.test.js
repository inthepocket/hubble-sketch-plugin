import { Document } from 'sketch/dom';
import hubble from '../hubble';

const pathToMockSketchFile = 'ABSOLUTE_PATH_TO_SKETCH_FILE.sketch';

// console.log("__dirname", __dirname);
console.log(pathToMockSketchFile);

Document.open(pathToMockSketchFile, err => {
  if (err) throw err;
  test('run hubble-plugin', context => {
    hubble(context);

    // const page = document.selectedPage;

    // console.log (JSON.stringify (page));

    // const group = new Group ({
    //   parent: page,
    //   layers: [
    //     {
    //       type: Types.Text,
    //       text: 'hello world',
    //     },
    //   ],
    // });
    // expect (page.layers[0]).toEqual (group);
    // expect (group.layers[0].type).toBe (`${Types.Text}`);
    // plugin (context);
  });
});
