import Vue from 'vue'

// components
import Alert from 'components/alert/Alert'
import Badge from 'components/badge/Badge'
import Breadcrumb from 'components/breadcrumb/Breadcrumb'
import BreadcrumbItem from 'components/breadcrumb/BreadcrumbItem'
import Button from 'components/button/Button'
import ButtonGroup from 'components/button/ButtonGroup'
import ButtonGroupItem from 'components/button/ButtonGroupItem'
import Card from 'components/card/Card'
import Carousel from 'components/carousel/Carousel'
import CarouselItem from 'components/carousel/CarouselItem'
import Navbar from 'components/navbar/Navbar'
import NavbarItem from 'components/navbar/NavbarItem'
Vue.component(Alert.name, Alert)
Vue.component(Badge.name, Badge)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(BreadcrumbItem.name, BreadcrumbItem)
Vue.component(Button.name, Button)
Vue.component(ButtonGroup.name, ButtonGroup)
Vue.component(Card.name, Card)
Vue.component(Carousel.name, Carousel)
Vue.component(CarouselItem.name, CarouselItem)
Vue.component(ButtonGroupItem.name, ButtonGroupItem)
Vue.component(Navbar.name, Navbar)
Vue.component(NavbarItem.name, NavbarItem)

// demo components
import Demo from '@/components/Demo'
Vue.component(Demo.name, Demo)

// directives
import clickoutside from 'directives/clickoutside'
Vue.directive('clickoutside', clickoutside)
