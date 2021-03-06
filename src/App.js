import { Body, Body2 } from './components/Body';
import { Header } from './components/Header';
import { Counter } from './components/Counter';
import ImageSlider from './components/ImageSlider';
import './App.css';

export default function App() {
  const add = (a, b) => a + b;

  return (
    <div className="App">
      <Header
        title={'Boas Francisco'}
        num={5}
        myFunc={add}
        myArr={[10, 11, 12, 13]}
      />
      <Body mainText="Francisco" myFunc={add} />
      <Body2 />
      <Counter initialCount={100} />
      <ImageSlider />
    </div>
  );
}
