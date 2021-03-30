import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Tile from './Tile.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('Tile component', () => {

  it('should render as expected', () => {
    const component = shallow(<Tile />)
	 	expect(component.exists()).toBe(true);
  })
})
