import { always } from 'ramda'
import { getTitle } from './util'

const { one, two } = require('./numbers')

const appElem = document.getElementById('app')

appElem.innerHTML = `${getTitle()} : ${one()} : ${two()}`