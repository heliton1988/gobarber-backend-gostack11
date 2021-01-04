import appError from '@shared/errors/AppError';

import FakaAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakaAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '122431',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('122431');
  });

  it('should not be able to create two appointment in the same time', async () => {
    const fakeAppointmentsRepository = new FakaAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointmentDate = new Date(2021, 4, 10, 11);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '122431',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '122431',
      }),
    ).rejects.toBeInstanceOf(appError);
  });
});
