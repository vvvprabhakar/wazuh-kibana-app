/*
 * Wazuh app - Module for Wazuh login routes
 * Copyright (C) 2015-2020 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
import { WazuhLoginCtrl } from '../controllers/wazuh-login';

export function WazuhLoginRoutes(server) {
  const ctrl = new WazuhLoginCtrl(server);
  
  server.route({
    method: 'POST',
    path: '/wz-login/login',
    handler(req, reply) {
      return ctrl.getToken(req, reply);
    }
  })

  server.route({
    method: 'POST',
    path: '/wz-login/logout',
    handler(req, reply) {
      return "Logout";
    }
  })
}