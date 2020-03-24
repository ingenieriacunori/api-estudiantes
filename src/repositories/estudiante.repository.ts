import {DefaultCrudRepository} from '@loopback/repository';
import {Estudiante, EstudianteRelations} from '../models';
import {DataSourceMySqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EstudianteRepository extends DefaultCrudRepository<
  Estudiante,
  typeof Estudiante.prototype.idestudiante,
  EstudianteRelations
> {
  constructor(
    @inject('datasources.DataSourceMySql') dataSource: DataSourceMySqlDataSource,
  ) {
    super(Estudiante, dataSource);
  }
}
