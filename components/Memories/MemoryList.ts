import { Memory } from '@/types/Memory'
import { Archery } from '@/content/memories/Archery'
import { Band } from '@/content/memories/Band'
import { Game } from '@/content/memories/Game'
import { Sabage } from '@/content/memories/Sabage'
import { Sunobo } from '@/content/memories/Sunobo'
import { VR } from '@/content/memories/VR'

export const memoryList: ReadonlyArray<Memory> = [
  Archery,
  Band,
  Game,
  Sabage,
  Sunobo,
  VR
]
