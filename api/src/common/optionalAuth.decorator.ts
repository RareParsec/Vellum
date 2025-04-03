import { Reflector } from '@nestjs/core';

export const OptionalAuth = Reflector.createDecorator<boolean>();
