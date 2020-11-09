import Avatars from '@dicebear/avatars'
import sprites from '@dicebear/avatars-male-sprites'

let options = {}
let avatars = new Avatars(sprites, options)

export const getAvatar = (seed: string) => avatars.create(seed)