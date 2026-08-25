import { IsString, IsOptional } from 'class-validator';

export class UpdateEmployeeDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  department?: string;

  @IsString()
  @IsOptional()
  project?: string;

  @IsString()
  @IsOptional()
  rank?: string;
}