import Promise from 'bluebird'
import ProgressBar from './progress-bar'

const bar = new ProgressBar(100)

function start () {
  return Promise.delay(100).then(() => {
    bar.tick()
    bar.render()
    return start()
  })
}

start()