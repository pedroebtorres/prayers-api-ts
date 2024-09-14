type ServiceResponseErrorType = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'INTERNAL_ERROR';

export type ServiceResponseError = {
    status: ServiceResponseErrorType,
    data: { message: string }
};

export type ServiceResponseSuccess<T> = {
    status: 'SUCCESSFUL',
    data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;