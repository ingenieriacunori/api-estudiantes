import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'estudiante'
    }
  }
})
export class Estudiante extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idestudiante?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombreestudiante: string;

  @property({
    type: 'string',
    required: true,
  })
  direccionestudiante: string;

  @property({
    type: 'string',
    required: true,
  })
  carreraestudiante: string;


  constructor(data?: Partial<Estudiante>) {
    super(data);
  }
}

export interface EstudianteRelations {
  // describe navigational properties here
}

export type EstudianteWithRelations = Estudiante & EstudianteRelations;
