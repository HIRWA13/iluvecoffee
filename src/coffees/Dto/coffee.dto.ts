import { IsNotEmpty } from 'class-validator';

export class CreateCoffeeDto {
  @IsNotEmpty({ message: 'the coffee should have a name' })
  name: string;

  @IsNotEmpty()
  brand: string;
  flavors: string[];
}
