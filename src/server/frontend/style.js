export const style = `.horizontal-slider {
  width: 100%;
  max-width: 500px;
  height: 50px;
  border: 1px solid grey;
}

.vertical-slider {
  height: 380px;
  width: 50px;
  border: 1px solid grey;
}

.handle {
  font-size: 0.9em;
  text-align: center;
  background-color: black;
  color: white;
  cursor: pointer;
}

.handle.active {
  background-color: grey;
}

.bar {
  position: relative;
  background: #ddd;
}

.bar.bar-1 {
  background: #f00;
}

.bar.bar-2 {
  background: #0f0;
}

.horizontal-slider .bar {
  top: 20px;
  height: 10px;
}

.horizontal-slider .handle {
  top: 1px;
  width: 50px;
  height: 48px;
  line-height: 48px;
}

.vertical-slider .handle {
  left: 1px;
  width: 48px;
  line-height: 50px;
}

.vertical-slider .bar {
  left: 20px;
  width: 10px;
}

#horizontal-0,
#horizontal-1, #horizontal-2, #horizontal-3,
#vertical {
  margin: 20px 10px;
}
`
