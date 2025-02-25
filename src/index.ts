/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { RNHoleView as RNHoleViewAndroidIOS } from 'react-native-hole-view';
import { Platform } from 'react-native';
import { RNHoleViewHarmony } from './index.harmony';
export { IRNHoleView, IRNHoleViewAnimation, ERNHoleViewTimingFunction, RNHole } from 'react-native-hole-view';

const isIOSAndroid = Platform.OS === 'android' || Platform.OS === 'ios';

export const RNHoleView = isIOSAndroid ? RNHoleViewAndroidIOS : RNHoleViewHarmony;

