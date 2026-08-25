import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateEmployeeDto {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  @IsNotEmpty()
  name!: string;          // ← added !

  @IsString()
  @IsNotEmpty()
  department!: string;    // ← added !

  @IsString()
  @IsNotEmpty()
  project!: string;       // ← added !

  @IsString()
  @IsNotEmpty()
  rank!: string;          // ← added !
}