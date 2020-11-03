import React, { memo, useState } from 'react'
import GridLayout from 'react-grid-layout'
// const ResponsiveReactGridLayout = WidthProvider(Responsive);
export default memo(function Grid() {

  const [layouts] = useState([
    { i: 'a', x: 0, y: 0, w: 1, h: 1, minW: 1, maxW: 2 },
    { i: 'b', x: 1, y: 0, w: 2, h: 2, minW: 1, maxW: 2 },
    { i: 'c', x: 0, y: 2, w: 1, h: 2, minW: 1, maxW: 2 }
  ]);

  const onResizes = () => {
    console.log("87754")
  }
  const onLayoutChange =(layout, layouts)=> {
    console.log("4445")
  }
  return (
    <div>
      <GridLayout style={{ width: '1200px'}} layout={layouts} cols={5} rowHeight={30} width={1200} rowHeight={160}  isDroppable={true}
        margin={[10, 10]} onResize={ onResizes() } onLayoutChange={onLayoutChange(layouts)}>
        <div key="a" style={{"background": "red"}}>a</div>
        <div key="b" style={{"background": "red"}}>b</div>
        <div key="c" style={{"background": "red"}}>c</div>
      </GridLayout>
    </div>
  )
})
