/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import { Live2DCubismFramework as csmvector } from '../../src/type/csmvector';
import { Live2DCubismFramework as cubismmodel } from '../../src/model/cubismmodel';
import { Live2DCubismFramework as cubismid } from '../../src/id/cubismid';
import CubismIdHandle = cubismid.CubismIdHandle;
import CubismModel = cubismmodel.CubismModel;
import csmVector = csmvector.csmVector;
export declare namespace Live2DCubismFramework {
    /**
     * 呼吸機能
     *
     * 呼吸機能を提供する。
     */
    class CubismBreath {
        /**
         * インスタンスの作成
         */
        static create(): CubismBreath;
        /**
         * インスタンスの破棄
         * @param instance 対象のCubismBreath
         */
        static delete(instance: CubismBreath): void;
        /**
         * 呼吸のパラメータの紐づけ
         * @param breathParameters 呼吸を紐づけたいパラメータのリスト
         */
        setParameters(breathParameters: csmVector<BreathParameterData>): void;
        /**
         * 呼吸に紐づいているパラメータの取得
         * @return 呼吸に紐づいているパラメータのリスト
         */
        getParameters(): csmVector<BreathParameterData>;
        /**
         * モデルのパラメータの更新
         * @param model 対象のモデル
         * @param deltaTimeSeconds デルタ時間[秒]
         */
        updateParameters(model: CubismModel, deltaTimeSeconds: number): void;
        /**
         * コンストラクタ
         */
        constructor();
        _breathParameters: csmVector<BreathParameterData>;
        _currentTime: number;
    }
    /**
     * 呼吸のパラメータ情報
     */
    class BreathParameterData {
        /**
         * コンストラクタ
         * @param parameterId   呼吸をひもづけるパラメータID
         * @param offset        呼吸を正弦波としたときの、波のオフセット
         * @param peak          呼吸を正弦波としたときの、波の高さ
         * @param cycle         呼吸を正弦波としたときの、波の周期
         * @param weight        パラメータへの重み
         */
        constructor(parameterId?: CubismIdHandle, offset?: number, peak?: number, cycle?: number, weight?: number);
        parameterId: CubismIdHandle;
        offset: number;
        peak: number;
        cycle: number;
        weight: number;
    }
}
//# sourceMappingURL=cubismbreath.d.ts.map